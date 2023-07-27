export class GenericId {
  constructor(private _id: number) {}

  get id() {
    return this._id;
  }
}
