/** 班级 */
export interface IClass {
  id: string;
  name: string;
}

/** 历届班级 */
export interface IPreviousClasse {
  name: string;
  classes: IClass[];
}
