import React from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';
import { ProgressBar, Text } from '@origin-digital/style-guide';
import clamp from 'lodash/clamp';

const Container = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    margin-left: 8px;

    > *:not(:last-child) {
      margin-right: 8px;
    }
    > *:last-child {
      width: 42px;
    }

    div[role='progressbar'] {
        transition: width 0.4s ease-in;
    }
`;


const PercentageProgressBar = ({ percentage }) => {
    const clampedPercentage = clamp(percentage, 0, 100);

    return (
        <Container>
            <ProgressBar
                min={0}
                max={100}
                value={clampedPercentage}
                backgroundColor="grey16"
                fillColor="lightOrange"
                height="6px"
            />

            <Text color="grey56" size="sm" align="center">{clampedPercentage}%</Text>
        </Container>
    );
};

PercentageProgressBar.propTypes = {
    percentage: number.isRequired
};

export { PercentageProgressBar };
