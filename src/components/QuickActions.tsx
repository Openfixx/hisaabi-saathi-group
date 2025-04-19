import './QuickActions.css';

export default function QuickActions({ icon, title }: { icon: string; title: string }) {
  return (
    <button className="quick-action">
      <span className="action-icon">{icon}</span>
      <span className="action-title">{title}</span>
    </button>
  );
}
