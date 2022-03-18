export class MenuItem {
  icon: any;
  title: string;
  selected: boolean;

  constructor(icon: any, title: string, selected: boolean) {
    this.icon = icon;
    this.title = title;
    this.selected = selected;
  }
}
