
import Card_data from './c_card';

function List_data({ coaches, onSelectCoach }) {
  return (
    <div className="coach-grid">
      {coaches.map((coach) => (
        <Card_data
          key={coach.id}
          coach={coach}
          onClick={() => onSelectCoach(coach)}
        />
      ))}
    </div>
  );
}

export default List_data;
