import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../Components/Navbar';

describe('Navbar component', () => {
  it('should render links', () => {
    render(
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Navbar />
        <Routes>
          <Route exact path="/" render={() => <div>Home page</div>} />
          <Route exact path="/missions" render={() => <div>Missions page</div>} />
          <Route exact path="/profile" render={() => <div>Profile page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const links = screen.getAllByRole('link');

    expect(links).toHaveLength(3);
    expect(links[0]).toHaveTextContent('Rockets');
    expect(links[1]).toHaveTextContent('Missions');
    expect(links[2]).toHaveTextContent('My Profile');
  });

  it('should highlight the active link', () => {
    render(
      <MemoryRouter initialEntries={['/missions']} initialIndex={0}>
        <Navbar />
        <Routes>
          <Route exact path="/" render={() => <div>Home page</div>} />
          <Route exact path="/missions" render={() => <div>Missions page</div>} />
          <Route exact path="/profile" render={() => <div>Profile page</div>} />
        </Routes>
      </MemoryRouter>,
    );

    const activeLink = screen.getByRole('link', { name: /missions/i });

    expect(activeLink).toHaveClass('active-link');
  });
});
