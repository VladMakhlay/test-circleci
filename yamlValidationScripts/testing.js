const YamlValidator = require('yaml-validator');

// Default options
const options = {
  structure: {
    config: {
      clients: [
        {
          name: 'string',
          id: 'number',
        }
      ],
      connections: [
        {
          name: 'string',
          strategy: 'string',
          twilio_id: 'number',
          twilio_idddd: 'number'
        }
      ]
    }
  },
  onWarning: function (error, filepath) {
    console.log(filepath + ' has error: ' + error);
  }
};

const files = [
  'config/testing.yaml',
];

const validator = new YamlValidator(options);
validator.validate(files);
validator.report();
