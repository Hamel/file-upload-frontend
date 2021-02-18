import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

function Copyright() {
    return (
      <Typography variant="body2" color="secondary" align="center" style={{ color: 'white' }}>
        {'Copyright © '}
        <Link color="inherit" href="https://preview.hamel.com/" style={{ textDecoration: 'none' }} >
          hamel.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

export default Copyright