'use babel';

import Tx191testseoView from './tx191testseo-view';
import { CompositeDisposable } from 'atom';

export default {

  tx191testseoView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.tx191testseoView = new Tx191testseoView(state.tx191testseoViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.tx191testseoView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'tx191testseo:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.tx191testseoView.destroy();
  },

  serialize() {
    return {
      tx191testseoViewState: this.tx191testseoView.serialize()
    };
  },

  toggle() {
    console.log('Tx191testseo was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
