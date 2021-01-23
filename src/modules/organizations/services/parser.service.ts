import { Injectable } from '@angular/core';
import { Organization } from '../models/organization';
import ohm from 'ohm-js';

@Injectable({
  providedIn: 'root'
})
export class ParserService {
  org! : Organization;
  grammar: string = '';
  GRAMMAR_FILE = 'assets/horbac.ohm';
  constructor() { }
  parse(text: string, match: (success: boolean, res?: Object) => void) {
      const options = {
        headers: new Headers({'content-type': 'text/ohm-js'})
      };
      fetch(this.GRAMMAR_FILE, options)
      .then(response => response.text())
      .then(data => {
        this.grammar = data;
        let myGrammar = ohm.grammar(this.grammar);
        //const userInput = '{ org: {id: 12, name: BHD, description: PAPA}, au: {id: 11, name: BHD, description: PAPA, parent: 0},  ou: {id: 14, name: BHD, description: PAPA, parent: 11} }';
        const m = myGrammar.match(text);
        if (m.succeeded()) {
          console.info('SUCCESS...');
          const semantics = myGrammar.createSemantics();
          semantics.addOperation('hierarchy', {
            Hierarchy(a, b, c, d, e, f, g){
              let org = JSON.stringify(b.sourceString.substr(6));

              console.log("ID", JSON.parse(org)['id']);
              return JSON.parse(JSON.stringify(b.sourceString.substr(4)));
            },
            Aunit(a, b) {
              return " Admin Unit: "+b.sourceString;
            },
            Org(a, b) {
              return " Organization: "+b.sourceString;
            },
            Ounit(a, b){
              console.log("O UNIT.........: ", b.sourceString)
              return " operational Unit: "+b.sourceString;
            },
            block(a, b, c, d, e, f, g, h, i) {
              return a.sourceString + " "+b.sourceString + " "+c.sourceString;
            },
            val(a){
              return a.sourceString;
            }
          });
          //console.log("PARSE OK....", ParserService.semantic(myGrammar)).hierarchy());
          console.log('semantcis..............: ', semantics(m).hierarchy() );
          match(m.succeeded(), semantics(m).hierarchy());
        } else {
          console.info('data received...', text);
          console.log('BAD MATCH', myGrammar.trace(text))
          match(false, myGrammar.trace(text));
        }
    });
  }
 
}
