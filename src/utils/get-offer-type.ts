function getOfferType(type: string): string {
  return type.charAt(0).toUpperCase() + type.slice(1);
}

export default getOfferType;
