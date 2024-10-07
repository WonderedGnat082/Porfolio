import Icons from './utils/Icons';
import ComponentFactory from './ComponentsFactory';

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add('has-js');
    Icons.load(); //Aucune icône dans ce projet
    console.log(Icons);

    new ComponentFactory();
  }
}
new Main();
