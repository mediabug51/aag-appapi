'use strict';

/**
 * tagger-review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tagger-review.tagger-review');
