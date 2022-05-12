const errorMessages = {
  unknownSchema: (schemaName) => `There is no schema with the name '${schemaName}'`,
  unknownValidator: (validatorName) => `There is no validator with the name '${validatorName}'`,
};

export default errorMessages;
