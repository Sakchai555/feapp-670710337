function ProfileCard({ name, nickname, major, favorites }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>ชื่อเล่น: {nickname}</p>
      <p>สาขา: {major}</p>
      <p>สิ่งที่ชอบ: {favorites.join(', ')}</p>
    </div>
  );
}

export default ProfileCard;