'use strict';

/**
 * learning-on-demand service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::learning-on-demand.learning-on-demand');
