import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import '../directory/directory.styles.scss';

import { selectDirectorySection } from '../../redux/directory/directory.selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Directory = ( {sections} ) => (
  <div className='directory-menu'>
      {
          sections.map(
            ({id, ...otherSectionsProps}) => (
              <MenuItem key={id} {...otherSectionsProps}>
              </MenuItem>
            )
          )
      }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);

