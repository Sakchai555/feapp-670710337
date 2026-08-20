import ProfileCard from './Component/ProfileCard';
import './App.css';
import './Card.css';

const members = [
  {
    id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว']
  },
  {
    id: 2, name: 'ศักดิ์ชัย ใจสะอาด', nickname: 'ออมสิน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'อิกัวน่า']
  },{
    id: 3, name: 'John Bays', nickname: 'จ่อย',
    major: 'CS', favorites: ['ชาไทย', 'หมา']
  },
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;