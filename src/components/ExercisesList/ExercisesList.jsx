import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ExercisesItem } from '../ExercisesItem/ExercisesItem';
import{StyledLink} from './ExercisesList.styled'

export const ExercisesList = ({subcategory, nameExercise}) => {
  const { name } = useParams();


 
  let exercise;
  const exercises = useSelector(state => state.exercises.items);

  switch (subcategory) {
    case 'Body parts':
      exercise = exercises.filter(item => item.bodyPart === name);
      break;
    case 'Muscles':
      exercise = exercises.filter(item => item.target === name);
      break;
    case 'Equipment':
      exercise = exercises.filter(item => item.equipment === name);
      break;

    default:
      break;
  }

  return (
    <StyledLink>
      {exercise.map(item => (
        <ExercisesItem
        onClick={() => active(item.name)}
         key={item.name}
          exerciseName={item.name}
          exercImg={item.gifUrl}
          calories={item.burnedCalories}
          bodyPart={item.bodyPart}
          muscles={item.target}
          time={item.time}
          equipment={item.equipment}
          
        />
      ))}
    </StyledLink>
  );
};