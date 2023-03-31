import React, { Component } from 'react';
import AboutCard from '../../components/AboutCard';
import Header from '../../components/Header';

export default class About extends Component {
  render() {
    return (
       <>
        <Header />
        <div className="p-6 mt-20">
          <div className="text-center flex flex-col space-y-3">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium aliquid officiis non, deleniti dolores quae voluptate
              earum dicta dignissimos, cupiditate ducimus. Soluta at adipisci
              nobis dolor ratione impedit, exercitationem ex. Lorem ipsum dolor
              sit amet consectetur, adipisicing elit. Reiciendis alias non
              voluptate quo sint exercitationem nulla facilis laborum mollitia
              impedit, recusandae sit sequi vel, unde odit! Tempora hic
              inventore nihil. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Rem, eos accusantium. Debitis distinctio quidem
              odit, cupiditate unde voluptatem delectus, aut expedita commodi id
              voluptatibus animi facilis vel ea illo et.
            </p>
          </div>

          {/* Cards wrapper */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-x-5 w-full">
            <AboutCard
              title="Card 1"
              icon
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati veritatis! Ea nam, voluptatem.."
            />
            <AboutCard
              title="Card 2"
              icon
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati veritatis! Ea nam, voluptatem.."
            />
            <AboutCard
              title="Card 3"
              icon
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati veritatis! Ea nam, voluptatem.."
            />
            <AboutCard
              title="Card 3"
              icon
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, obcaecati veritatis! Ea nam, voluptatem.."
            />
          </div>
        </div>
      </>
    )
  }
}
