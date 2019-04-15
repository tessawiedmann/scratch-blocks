/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Colours');
goog.require('Blockly.ScratchBlocks.VerticalExtensions');

Blockly.Blocks['control_lucy'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({"type": "control_lucy",
    "message0": "Lucy play %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "notes",
        "options": [
          [
            "C",
            "noteA"
          ],
          [
            "D",
            "noteB"
          ],
          [
            "E",
            "noteC"
          ],
          [
            "F",
            "noteD"
          ],
          [
            "G",
            "noteE"
          ],
          [
            "Rest",
            "rest"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "category": Blockly.Categories.control,
    "colour": "#B782CA",
  });
  }
};

Blockly.Blocks['control_geoff'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({"type": "control_geoff",
    "message0": "Geoff play %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "notes",
        "options": [
          [
            "C",
            "noteA"
          ],
          [
            "D",
            "noteB"
          ],
          [
            "E",
            "noteC"
          ],
          [
            "F",
            "noteD"
          ],
          [
            "G",
            "noteE"
          ],
          [
            "Rest",
            "rest"
          ]
        ]
      }
    ],
    "inputsInline": true,
    "previousStatement": null,
    "nextStatement": null,
    "category": Blockly.Categories.control,
    "colour": "#8FC88D",
  });
  }
};

Blockly.Blocks['control_freddie'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_freddie",
      "message0": "Freddie play %1",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "notes",
          "options": [
            [
              "C",
              "noteA"
            ],
            [
              "D",
              "noteB"
            ],
            [
              "E",
              "noteC"
            ],
            [
              "F",
              "noteD"
            ],
            [
              "G",
              "noteE"
            ],
            [
              "Rest",
              "rest"
            ]
          ]
        }
      ],
      "inputsInline": true,
      "previousStatement": null,
      "nextStatement": null,
      "category": Blockly.Categories.control,
      "colour": "#9AB5C4",
    });
  }
};

Blockly.Blocks['control_repeat'] = {
  /**
   * Block to wait (pause) stack.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "type": "control_repeat",
      "message0": "Repeat %1 times %2 %3",
      "args0": [
        {
          "type": "field_dropdown",
          "name": "repeat",
          "options": [
            [
              "1",
              "1"
            ],
            [
              "2",
              "2"
            ],
            [
              "3",
              "3"
            ],
            [
              "4",
              "4"
            ],
            [
              "5",
              "5"
            ],
            [
              "6",
              "6"
            ],
            [
              "7",
              "7"
            ],
            [
              "8",
              "8"
            ],
            [
              "9",
              "9"
            ],
            [
              "10",
              "10"
            ]
          ]
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "input_statement",
          "name": "NAME"
        }
      ],
          "inputsInline": true,
          "previousStatement": null,
          "nextStatement": null,
          "category": Blockly.Categories.control,
          "colour": "#F3B476",
    });
  }
};

Blockly.Blocks['event_whenflagclicked'] = {
  /**
   * Block for when flag clicked.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit({
      "id": "event_whenflagclicked",
      "message0": Blockly.Msg.EVENT_WHENFLAGCLICKED,
      "args0": [
        {
          "type": "field_image",
          "src": Blockly.mainWorkspace.options.pathToMedia + "green-flag.svg",
          "width": 24,
          "height": 24,
          "alt": "flag"
        }
      ],
      "category": Blockly.Categories.event,
      "extensions": ["colours_event", "shape_hat"]
    });
  }
};

