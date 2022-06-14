import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { School, Work } from "@mui/icons-material";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2011"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            Perm Industrial and Commercial College, Perm city
          </h3>
          <p> lawyer (my mistake)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<School />}
        >
          <h3 className="vertical-timeline-element-title">
            First Moscow Law Institute, Moscow city
          </h3>
          <p> lawyer (my mistake)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2012 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">
            Municipal employee
          </h3>
          <p />
          <h4 className="vertical-timeline-element-subtitle">Perm city</h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<Work />}
        >
          <h3 className="vertical-timeline-element-title">looking for a job</h3>
          <p />
          <h4 className="vertical-timeline-element-subtitle">
            Saint Petersburg
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
