
import Constants from './DiscConstants'
import controller from './DiscController'

class DiscActions {

  create( dispatch, disc ) {
    let discs = controller.create( disc )
    dispatch( {
      type: Constants.DISC_CREATE,
      discs
    });
  }

  findAll( dispatch ) {
    let discs = controller.findAll()
    dispatch( {
      type: Constants.DISC_FIND_ALL,
      discs
    })
  }

  remove( dispatch, id) {
    let discs = controller.delete(id)
    dispatch( {
      type: Constants.DISC_DELETE,
      discs
    })
  }

  update( dispatch, disc ) {
    let discs = controller.update(disc)
    dispatch( {
      type: Constants.DISC_UPDATE,
      discs
    })
  }
}

export default new DiscActions()
