import React from 'react';
import 'semantic-ui-react';
import { Segment, Grid, Header, Dropdown} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
function Main(){
    return( 
        <Segment>
          <Grid columns={2} divided>
              <Grid.Row>
                  <Grid.Column>
                      <Header as='h2'>Sugerencias para usted</Header>
                      <Header as='h3'>Visualizacion Actual: Listado</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='Cambiar visualizacion'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='Listado'/>
                              <Dropdown.Item text='Mosaico'/>
                          </Dropdown.Menu>
                      </Dropdown>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
       </Segment>
    )
}
export default Main;