'use strict';

/**
 * ask-aag service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::ask-aag.ask-aag');
