import { Link } from 'react-router-dom';

export default function DestinationCard({ title, path }) {
  return (
    <Link to={path} className="card-link">
      <div className="card">{title}</div>
    </Link>
  );
}
