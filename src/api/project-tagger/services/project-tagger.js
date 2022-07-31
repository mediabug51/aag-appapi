'use strict';

/**
 * project-tagger service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-tagger.project-tagger');
