import Button from '../Button/Button';
import './UserCard.css';

const RoleBadge = ({ role }) => {
  const cls = role === 'Admin' ? 'badge admin' : role === 'Moderator' ? 'badge mod' : 'badge user';
  return <span className={cls}>{role}</span>;
};

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="user-card">
      <div className="user-left">
        <div className="avatar-box">
          <img src={user.avatar} alt={user.name} />
        </div>
        <div className="user-meta">
          <h4>{user.name}</h4>
          <p className="email">{user.email}</p>
        </div>
        <RoleBadge role={user.role} />
      </div>
      <div className="user-actions">
        <Button label="Edit" variant="gray" small onClick={() => onEdit(user.id)} />
        <Button label="Delete" variant="danger" small onClick={() => onDelete(user.id)} />
      </div>
    </div>
  );
};

export default UserCard;
