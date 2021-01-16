import { jsDocComment } from '@angular/compiler';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Organization } from '@modules/organizations/models/organization';
import ohm from 'ohm-js';
@Component({
    selector: 'sb-error-401',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './error-401.component.html',
    styleUrls: ['error-401.component.scss'],
})
export class Error401Component implements OnInit {
    org! : Organization;
    constructor() {}
    ngOnInit() {
        let myGrammar = ohm.grammar(`HORBAC {
            Hierarchy = Org "-" Aunit "-" Ounit
            Aunit = "au:" blockO
            Org = "org:" block
            Ounit = "ou:" blockO
            employee = "emp:" block
            view = "view:" block
            resource = "rsc:" block
            activity = "activ:" block
            action = "action:" blockO
            context = "context:" blockC
            agrant = "agrant:" blockPA
            ogrant = "ogrant:" blockPO
            block = "{id:" digit+ ", " "name:" val+ ", " "description:" val+ "}"
            blockO = "{id:" digit+ ", " "name:" val+ ", " "description:" val+ ", " "parent:" digit+ "}"
            blockC = "{id:" digit+ ", " "name:" val+ ", " "description:" val+ ", " "duration:" digit+ ", " "period:" digit+ "location:" digit+ "}"
            blockPA = "{id:" digit+ ", " "org:" val+ ", " "au:" val+ ", " "ou:" val+ "view:" val+ ", " "activity:" val+ ", " "context:" val+ "}"
            blockPO = "{id:" digit+ ", " "org:" val+ ", " "ou:" val+ ", " "view:" val+ ", " "activity:" val+ ", " "context:" val+ "}"
            val = "A".."Z"
        }`);  
        console.log('GRAMMAR..............: ', myGrammar);
        const userInput = 'org:{id:12, name:BHD, description:PAPA} - au:{id:11, name:BHD, description:PAPA, parent:0} - ou:{id:14, name:BHD, description:PAPA, parent:11}';
        const m = myGrammar.match(userInput.trim());
        if (m.succeeded()) {
        console.log('Greetings, human.');
        } else {
        console.log("That's not a greeting!", myGrammar.trace(userInput.trim()));
        }
        myGrammar.trace(userInput);

        const semantics = myGrammar.createSemantics();
        semantics.addOperation('hierarchy', {
            Hierarchy(a, b, c, d, e){
                let obj = JSON.parse(JSON.stringify(a.sourceString.substr(4)));
                let org = new Organization(obj.id, obj.name, obj.description);
                console.log("ORG......", obj['id']);
                return JSON.parse(JSON.stringify(a.sourceString.substr(4))) + ""+ c.sourceString.substr(3) + " "+e.sourceString.substr(3);
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
       console.log("PARSE OK....", semantics(myGrammar.match('org:{id:11, name:BHD, description:PAPA} - au:{id:15, name:BHD, description:PAPA, parent:0} - ou:{id:14, name:BHD, description:PAPA, parent:15}')).hierarchy());
    }
}
