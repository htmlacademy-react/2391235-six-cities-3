import clsx from 'clsx';

type BookmarkButtonProps = {
  isFavorite: boolean;
};

function BookmarkButton({ isFavorite }: BookmarkButtonProps): JSX.Element {
  return (
    <button
      className={clsx(
        'place-card__bookmark-button',
        'button',
        {
          'place-card__bookmark-button--active': isFavorite,
        }
      )}
      type="button"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>

      <span className="visually-hidden">
        {isFavorite ? 'In bookmarks' : 'To bookmarks'}
      </span>
    </button>
  );
}

export default BookmarkButton;
