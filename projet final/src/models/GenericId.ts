/**
 * Classe abstraite qui permet de créer un objet avec un id
 * @name GenericId
 */
export class GenericId {
  constructor(private _id: number) {}

  get id() {
    return this._id;
  }
}
