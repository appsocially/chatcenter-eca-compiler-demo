import { ECACompiler } from 'eca-compiler';
import { EVENTS } from './events';
import { Always } from './validators/always';
import { ResponseMatch } from './validators/response_match';
import { SendMessage } from './actors/send_message';

let _conditionPool = {
  always: new Always(),
  response_match: new ResponseMatch()
};
let _actionPool = {
  send_message: new SendMessage()
};

let compiler = new ECACompiler({
  conditionExtensions: _conditionPool,
  actionExtensions: _actionPool,
  events: EVENTS
});
let program = compiler.compileAll(`
  CREATE TEMPLATE template_0 AS
  TEXT "Please choose 1 options"
  ATTACHMENT template0_attachment_1
    imageUrl "https://example.com/image.jpg"
  ACTION template0_action1
    label "Option 1"
  ACTION template0_action2
    label "Option 2"
  ACTION template0_action3
    label "Option 3"
  END

  CREATE TEMPLATE template_1 AS
    TEXT "You chose template0_action1"
  END

  CREATE TEMPLATE template_2 AS
    TEXT "You chose template0_action2"
  END

  CREATE TEMPLATE template_3 AS
    TEXT "You chose template0_action3"
  END

  CREATE RULE rule_0 AS
    ON Dialog.open
    TO org.team 
    IF always() DO send_message("template_0") THEN send_message("template_1")
  END

  CREATE RULE rule_1 AS
    ON Dialog.question.answered
    TO team
    IF response_match("template0_action1") DO send_message("template_1")
    ELIF response_match("template0_action2") DO send_message("template_2")
    ELIF response_match("template0_action3") DO send_message("template_3")
  END`);

console.log(program);