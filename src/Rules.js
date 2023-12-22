import React from "react";
import { Fieldset } from "primereact/fieldset";
import "./tirth.css";


export default function ToggleableDemo() {
  return (
    <div className="section">
      <div className="imgsec relative h-96 overflow-auto">
  <div
    className="bg-cover bg-center h-full transition-transform duration-300 transform-gpu hover:scale-105 focus:scale-105 active:scale-105 grayscale-50 hover:filter-none focus:filter-none active:filter-none"
    style={{
      backgroundImage: `url("./Rules.png")`,
      backgroundSize: 'cover', // Ensure the background image covers the entire container
    }}
    tabIndex="0" // This makes the div focusable
  ></div>
</div>


      <div className="card">
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="border border-gray-400 p-4 rounded bg-gray-100 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Code of Conduct
              </button>
            </span>
          }
          toggleable
          collapsed
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <div className="mt-6">
            <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
              <li style={{ marginTop: "10px", fontWeight: "bold" }}>
                OUT - If the ball hits ANYWHERE on the roof 3 times during legal
                balls
              </li>
              <li>Do not tap the bat on the gym floor</li>
              <li>
                Batsman cannot retire/declare just to come back later in the
                match.
              </li>
              <li>
                {" "}
                LBW is not part of the dismissal process. A wicket can fall if
                batsman has been bowled, runout, caught, obstructing the field
                or hit wicket.
              </li>
              <li>At the end of each over, batsmen must swap ends. </li>
              <li>
                No batsman may bat more than once and a team may not declare an
                innings closed.
              </li>
              <li> Last batsman is not allowed to bat alone.</li>
            </ul>
          </div>
        </Fieldset>
        <Fieldset
          legend={
            <span className="font-semibold">
              <button
                className="border border-gray-400 p-4 rounded bg-gray-100 text-gray-700"
                style={{ width: "180px" }}
              >
                {" "}
                Match Rules
              </button>
            </span>
          }
          toggleable
          collapsed
          className="mt-9 border border-gray-400 p-4 rounded"
        >
          <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li style={{ marginTop: "10px", fontWeight: "bold" }}>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={<span className="font-semibold">Scoring Rules</span>}
          toggleable
          collapsed
          className="mt-9"
        >
          <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li style={{ marginTop: "10px", fontWeight: "bold" }}>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={<span className="font-semibold">Bowling Rules</span>}
          toggleable
          collapsed
          className="mt-9"
        >
          <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li style={{ marginTop: "10px", fontWeight: "bold" }}>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>
        <Fieldset
          legend={<span className="font-semibold">Batting Rules</span>}
          toggleable
          collapsed
          className="mt-9"
        >
          <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li style={{ marginTop: "10px", fontWeight: "bold" }}>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>

        <Fieldset
          legend={<span className="font-semibold">Fielding Rules</span>}
          toggleable
          collapsed
          className="mt-9"
        >
          <ul className="text-gray-700 list-disc m-0 mb-4 ml-4 sm:ml-8 space-y-4">
            <li style={{ marginTop: "10px", fontWeight: "bold" }}>
              OUT - If the ball hits ANYWHERE on the roof 3 times during legal
              balls
            </li>
            <li>Do not tap the bat on the gym floor</li>
            <li>
              Batsman cannot retire/declare just to come back later in the
              match.
            </li>
            <li>
              {" "}
              LBW is not part of the dismissal process. A wicket can fall if
              batsman has been bowled, runout, caught, obstructing the field or
              hit wicket.
            </li>
            <li>At the end of each over, batsmen must swap ends. </li>
            <li>
              No batsman may bat more than once and a team may not declare an
              innings closed.
            </li>
            <li> Last batsman is not allowed to bat alone.</li>
          </ul>
        </Fieldset>
      </div>
    </div>
  );
}
