import React from 'react';
import 'semantic-ui-react';
import { Segment, Grid, Header, Dropdown, Image, Button} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import image from '../../palacio.jpg';
function Listado(){
    return( 
        <Segment>
          <Grid columns={3} divided>
              <Grid.Row>
                  <Grid.Column>
                    <Image src={image} size='medium'/>
                  </Grid.Column>
                  <Grid.Column>
                      <Header as='h2'>Palacio Portales</Header>
                      <Header as='h3'>Calificacion : 5</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='califique'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='1'/>
                              <Dropdown.Item text='2'/>
                              <Dropdown.Item text='3'/>
                              <Dropdown.Item text='4'/>
                              <Dropdown.Item text='5'/>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Button secondary>Calificar</Button>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    <Image src={image} size='medium'/>
                  </Grid.Column>
                  <Grid.Column>
                      <Header as='h2'>Palacio Portales</Header>
                      <Header as='h3'>Calificacion : 5</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='califique'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='1'/>
                              <Dropdown.Item text='2'/>
                              <Dropdown.Item text='3'/>
                              <Dropdown.Item text='4'/>
                              <Dropdown.Item text='5'/>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Button secondary>Calificar</Button>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    <Image src={image} size='medium'/>
                  </Grid.Column>
                  <Grid.Column>
                      <Header as='h2'>Palacio Portales</Header>
                      <Header as='h3'>Calificacion : 5</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='califique'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='1'/>
                              <Dropdown.Item text='2'/>
                              <Dropdown.Item text='3'/>
                              <Dropdown.Item text='4'/>
                              <Dropdown.Item text='5'/>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Button secondary>Calificar</Button>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    <Image src={image} size='medium'/>
                  </Grid.Column>
                  <Grid.Column>
                      <Header as='h2'>Palacio Portales</Header>
                      <Header as='h3'>Calificacion : 5</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='califique'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='1'/>
                              <Dropdown.Item text='2'/>
                              <Dropdown.Item text='3'/>
                              <Dropdown.Item text='4'/>
                              <Dropdown.Item text='5'/>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Button secondary>Calificar</Button>
                  </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                  <Grid.Column>
                    <Image src={image} size='medium'/>
                  </Grid.Column>
                  <Grid.Column>
                      <Header as='h2'>Palacio Portales</Header>
                      <Header as='h3'>Calificacion : 5</Header>
                  </Grid.Column>
                  <Grid.Column>
                      <Dropdown text='Califique'>
                          <Dropdown.Menu>
                              <Dropdown.Item text='1'/>
                              <Dropdown.Item text='2'/>
                              <Dropdown.Item text='3'/>
                              <Dropdown.Item text='4'/>
                              <Dropdown.Item text='5'/>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Button secondary>Calificar</Button>
                  </Grid.Column>
              </Grid.Row>
          </Grid>
       </Segment>
    )
}
export default Listado;