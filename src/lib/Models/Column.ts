import { DataType, SortDirection, TextAlign } from '../enums';
import { CellFunc, EditorFunc, HeaderCellFunc, SearchFunc, ValidationFunc } from '../types';

/**
 * Describes column of table its look and behaviour
 */
export class Column {
  public cell?: CellFunc;
  public dataType?: DataType = DataType.String;
  public editor?: EditorFunc;
  public key!: string;
  public headCell?: HeaderCellFunc;
  public isCustom?: boolean;
  public isEditable?: boolean;
  public field?: string;
  public search?: SearchFunc;
  public sortDirection?: SortDirection;
  public textAlign?: TextAlign;
  public title?: string;
  public validation?: ValidationFunc;
  public width?: number | string;
}
