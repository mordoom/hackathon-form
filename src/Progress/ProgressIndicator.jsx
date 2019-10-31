import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Text, BREAK_POINTS } from '@origin-digital/style-guide';
import { useFormikContext } from 'formik';
import { formConfig } from '../InputForm/formConfig';
import { PercentageProgressBar } from './PercentageProgressBar';
import clamp from 'lodash/clamp';

const STICKY_STYLES = {
  boxShadow: '0px 4px 6px 0px rgba(171,171,171,.2)',
  padding: '16px 0',
};

const StyledSticky = styled.div`
  margin-bottom: 0;
  .sticky-inner-wrapper {
    z-index: 9000;
  }
`;

const Container = styled.div`
  background: white;
  padding: 8px 8px;
  margin-bottom: 32px;
`;

const Inner = styled.div`
  display: flex;

  @media only screen and (min-width: ${BREAK_POINTS.Min.SM}) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

const getPercentage = (from, to, fraction) => {
  const total = to - from;
  console.log('total is', total, 'fraction:', fraction);
  
  const progress = Math.round(fraction * total);
  return clamp(progress, from, to);
}


export const ProgressIndicator = ({ currentStep }) => {
  const { progress, validationSchema } = formConfig[currentStep - 1];
  const { from, to } = progress;
  const context = useFormikContext();

  window.context = context;

  const numFieldsInStep = Object.keys(validationSchema.describe().fields).length;
  let numFieldsValid = 0;

  if (context.dirty) {
    numFieldsValid = numFieldsInStep - Object.keys(context.errors).length;
  }

  const percentage = getPercentage(from, to, numFieldsValid / numFieldsInStep);
  
  console.log('numFields', numFieldsInStep, 'numValid', numFieldsValid)
  console.log('progress percentage', percentage);

  return (
    <StyledSticky>
      <Sticky>
        {({ status }) => (
          <Container style={status === Sticky.STATUS_FIXED ? STICKY_STYLES : undefined}>
            <Inner>
              <Text size="xs">
                Step <Text inline fontWeight="medium" size="md">1</Text> / 4
              </Text>
              <PercentageProgressBar percentage={percentage} />
            </Inner>
          </Container>
        )}
      </Sticky>
    </StyledSticky>
  );
};

ProgressIndicator.propTypes = {
  currentStep: PropTypes.number
};
