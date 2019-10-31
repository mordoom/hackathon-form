import React from 'react';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Text, BREAK_POINTS } from '@origin-digital/style-guide';

const STICKY_STYLES = {
  boxShadow: '0px 4px 6px 0px rgba(171,171,171,.2)',
  padding: '16px 0',
};

const StyledSticky = styled.div`
  .sticky-inner-wrapper {
    z-index: 9000;
  }
`;

const Container = styled.div`
  background: white;
  padding: 0 8px;

  @media only screen and (min-width: ${BREAK_POINTS.Min.SM}) {
    padding: 0 16px;
  }
`;

const Inner = styled.div`
  display: flex;

  @media only screen and (min-width: ${BREAK_POINTS.Min.SM}) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

export const ProgressIndicator = () => {
  return (
    <StyledSticky>
      <Sticky>
        {({ status }) => (
          <Container style={status === Sticky.STATUS_FIXED ? STICKY_STYLES : undefined}>
            <Inner>
              <Text size="xs">
                Step <Text inline fontWeight="medium" size="md">1</Text> / 4
              </Text>
            </Inner>
            
          </Container>
        )}
      </Sticky>
    </StyledSticky>
  );
};
