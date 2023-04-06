// This file is used to configure:
// - static-site generation
// - Document shell (index.html)
// - ...tons of other things!

// Get started at https://react-static.js.org
import path from 'path'


export default {
  maxThreads: 1, // Remove this when you start doing any static generation
  plugins: [
    [
      'react-static-plugin-source-filesystem',
      {
        location: path.resolve('./src/Pages'),
      },
    ],
  ],
}
