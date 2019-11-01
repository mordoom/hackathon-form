import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Sticky from 'react-stickynode';
import { Text, BREAK_POINTS } from '@origin-digital/style-guide';
import { useFormikContext } from 'formik';
import { formConfig } from '../InputForm/formConfig';
import { PercentageProgressBar } from './PercentageProgressBar';
import clamp from 'lodash/clamp';
import uniq from 'lodash/uniq';

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
  const safeFraction = fraction || 0;
  const total = to - from;
  
  const progress = Math.round(safeFraction * total) + from;
  return clamp(progress, from, to);
}


export const ProgressIndicator = ({ currentStep }) => {
  const { progress, validationSchema } = formConfig[currentStep - 1];
  const { from, to } = progress;
  const context = useFormikContext();

  window.context = context;
  window.validationSchema = validationSchema;
  const numFieldsInStep = Object.keys(validationSchema.describe().fields).length;
  const errors = context.dirty ? context.errors : context.initialErrors;
  
  const numFieldsValid = numFieldsInStep - Object.keys(errors).length;
  const fractionValid = context.isSubmitting ? 1 : numFieldsValid / numFieldsInStep;
  const percentage = getPercentage(from, to, fractionValid);
  
  return (
    <StyledSticky>
      <Sticky>
        {({ status }) => (
          <Container style={status === Sticky.STATUS_FIXED ? STICKY_STYLES : undefined}>
            <Inner>
              <Text size="xs">
                Step <Text inline fontWeight="medium" size="md">{currentStep}</Text> / {formConfig.length}
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
