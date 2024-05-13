/**
 * These are the routes that are public and do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  '/'
]

/**
 * These are the routes that are protected and require authentication
 * @type {string[]}
 */
export const authRoutes = [
  '/auth/login',
  '/auth/register',
]

/**
 * The prefix for API auth routes
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after a successful login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings'