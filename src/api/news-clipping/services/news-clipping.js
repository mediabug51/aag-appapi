'use strict';

/**
 * news-clipping service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-clipping.news-clipping');
