function getRatingWidth(rating: number): string {
  return `${Math.round(rating) * 20}%`;
}

export default getRatingWidth;
