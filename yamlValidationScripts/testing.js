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
  onWarning: (error, filepath) => console.log(filepath + ' has error: ' + error),
  log: false,
  writeJson: false,
};

const files = [
  'config/testing.yaml',
];

const validator = new YamlValidator(options);
validator.validate(files);

if (validator.inValidFilesCount) {
  throw new Error(`Error in ${validator.logs}`)
}
