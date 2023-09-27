import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  NavigateContainer,
  Title,
  NameExercise,
  ButtonItem,
  ButtonIcon,
} from './ExercicesPage.styled';
import ExercisesCategories from '../../components/ExercisesCategories/ExercisesCategories';
import TitlePage from '../../components/TitlePage/TitlePage';
import { ExercisesSubcategoriesList } from '../../components/ExercisesSubcategoriesList/ExercisesSubcategoriesList';
import { ExercisesList } from '../../components/ExercisesList/ExercisesList';
import Loader from '../../components/Loader/Loader';
import { fetchFilteredExercises, fetchExercises } from '../../redux/operations';
import { getLoading } from '../../redux/selectors';

const ExercisesPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);
  const location = useLocation();

  // Додайте стан для відстеження обраного підкатегорії
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [nameExercise, setNameExercise] = useState(null);

  const [subCategories, setSubCategories] = useState('Body parts'); // Початкове значення "Body parts"
  const { subCategories: routeSubCategories } = useParams();

  useEffect(() => {
    if (routeSubCategories) {
      setSubCategories(routeSubCategories);
    }
  }, [routeSubCategories]);

  const dinamicFilter = { filter: subCategories };

  useEffect(() => {
    dispatch(fetchFilteredExercises(dinamicFilter))
      .then(result => {
        // Обработайте успешный результат запроса здесь
        // console.log(result);
      })
      .catch(error => {
        // Обработайте ошибку запроса здесь
        // console.error(error);
      });
    dispatch(fetchExercises());
  }, [subCategories]);

  // Функція для зміни обраної підкатегорії
  const handleSubcategorySelect = subcategory => {
    setSelectedSubcategory(subcategory);
  };

  const handleResetSubcategorySelect = () => {
    setSelectedSubcategory(null);
  };

  const capitalizeFirstLetter = name => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Функція для передавання назви  обраної підкатегорії
  const handNameExercise = name => {
    const capitalizedName = capitalizeFirstLetter(name);
    setNameExercise(capitalizedName);
  };

  const clearSelectedSubcategory = () => {
    setSelectedSubcategory(null);
  };

  return (
    <Container selectedSubcategory={selectedSubcategory}>
      <NavigateContainer>
        {selectedSubcategory && (
          <ButtonItem>
            <Link
              to={selectedSubcategory}
              onClick={() => clearSelectedSubcategory()}
            >
              <ButtonIcon alt="" src="/back-array.svg" />
              Back
            </Link>
          </ButtonItem>
        )}

        {!selectedSubcategory ? (
          <Title>
            <TitlePage titleText={'Exercices'} />
          </Title>
        ) : (
          <NameExercise>{nameExercise}</NameExercise>
        )}
        <ExercisesCategories
          resetSubcategorySelect={handleResetSubcategorySelect}
        />
      </NavigateContainer>
      {isLoading && <Loader />}
      {!isLoading && !selectedSubcategory && (
        <ExercisesSubcategoriesList
          onSelectSubcategory={handleSubcategorySelect}
          nameExercise={handNameExercise}
          subCategories={subCategories}
        />
      )}
      {selectedSubcategory && (
        <ExercisesList subcategory={selectedSubcategory} />
      )}
    </Container>
  );
};

export default ExercisesPage;
