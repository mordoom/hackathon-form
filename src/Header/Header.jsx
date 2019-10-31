import React from 'react';
import styled from 'styled-components';
import { Logo, Colors } from '@origin-digital/style-guide';

const Masthead = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SecureSite = styled.div`
  color: ${Colors.GREY80};
  display: flex;
  align-items: center;
  font-size: 12px;
  svg {
    margin-right:4px;
  }
  margin-right: 8px;
`;

export const Header = () => (
  <Masthead>
    <Logo height={64} />
    <SecureSite>
      <svg width={20} height={20} viewBox="0 0 24 24" fill={Colors.GREY80}>
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </svg>
      Secure site
    </SecureSite>
  </Masthead>
);