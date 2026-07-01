type BadgeProps = {
  text: string;
};

function Badge({ text }: BadgeProps): JSX.Element {
  return (
    <div className="place-card__mark">
      <span>{text}</span>
    </div>
  );
}

export default Badge;
