import React, {Component} from 'react';
import Quote, {MIND} from "../components/Quote";

class Shelter extends Component<{}, {}> {
    render() {
        return (
            <div className="blue">
                <div className="sticky"><h1>
                    shelter, food, and hygiene
                </h1></div>

                <Quote quote={"Did you know that young people leaving the foster care system are more likely than their " +
                "peers to experience homelessness."} citation={""} path={MIND}/>

                <p>
                    Homeless and runaway youth come from every socioeconomic, gender identity, educational level, and
                    racial group in the United States. Minors experiencing homelessness do not typically choose to live
                    on the streets. Many minors face a range of home dysfunction that challenges their emotional
                    well-being, development, safety, and health, forcing them to live on the streets.
                </p>

                <h4>Transitional Housing</h4>
                <p>
                    Transitional housing offers youth a safe place to live while they work toward acquiring necessary
                    life skills, self-sufficiency, and gainful employment. Please be aware that programs often have
                    wait lists for acceptance, and most programs require a referral from a case manager or shelter
                    program. If you are looking for transitional housing, please call your local 2-1-1.
                </p>

                <p>
                    Call for Assistance in Finding Shelter, Food, etc.
                    Regional Access Points are an entry point to Coordinated Entry for All in King County. They are
                    typically resource centers where households experiencing homelessness can get help finding housing
                    and other resources. Individuals and families experiencing homelessness may call ahead to schedule
                    an appointment.
                </p>
            </div>
        );
    }
}

export default Shelter;