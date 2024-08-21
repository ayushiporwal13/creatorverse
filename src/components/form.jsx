import React from 'react'
import youtube from "../assets/youtube.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";

const form = (props) => {
    console.log('props', props)
  return (
    <div className='text-white'>
        <form className="form-horizontal p-4">
        <div className="form-group text-start m-3">
          <label htmlFor="name" className="control-label">
            Name
          </label>
          <div className="">
            <input
              type="text"
              className="form-control input-lg"
              id="name"
              name="name"
              onChange={props.handleChange}
              value = {props.creator.name ? props.creator.name : ''}
            />
          </div>
        </div>
        <div className="form-group text-start m-3">
          <label className="control-label d-block" htmlFor="image">
            Image
          </label>
          <small id="helpBlock2" className="help-block text-muted">
            Provide a link to an image of your creator. Be sure to include the
            http://
          </small>
          <input
            type="text"
            className="form-control"
            id="inputSuccess1"
            aria-describedby="helpBlock2"
            name="image"
            onChange={props.handleChange}
            value = {props.creator.image ? props.creator.image : ''}
          />
        </div>
        <div className="form-group text-start m-3">
          <label htmlFor="description" className="control-label d-block">
            Description
          </label>
          <small id="helpBlock" className="help-block text-muted">
            Tell us a little bit about your creator.
          </small>
          <div className="">
            <textarea 
            className="form-control" 
            rows="5" 
            name="desc"  
            onChange={props.handleChange} 
            value={props.creator.desc ? props.creator.desc : ''}
            />
          </div>
        </div>
        <div className="form-group text-start m-3">
          <label className="control-label d-block" htmlFor="youtube">
            <img src={youtube} alt="youtube"  className='p-1'/>
            Youtube
          </label>
          <small id="helpBlock2" className="help-block text-muted">
            The creator's YouTube handle (without the @)
          </small>
          <input
            type="text"
            className="form-control"
            id="youtube"
            aria-describedby="helpBlock2"
            name='youtube'
            onChange={props.handleChange}
            value = {props.creator.youtube ? props.creator.youtube : ''}
          />
        </div>
        <div className="form-group text-start m-3">
          <label className="control-label d-block" htmlFor="twitter">
            <img src={twitter} alt="twitter"  className='p-1'/>
            Twitter
          </label>
          <small id="helpBlock2" className="help-block text-muted">
            The creator's Twitter handle (without the @)
          </small>
          <input
            type="text"
            className="form-control"
            id="twitter"
            aria-describedby="helpBlock2"
            name='twitter'
            onChange={props.handleChange}
            value = {props.creator.twitter ? props.creator.twitter : ''}
          />
        </div>
        <div className="form-group text-start m-3">
          <label className="control-label d-block" htmlFor="instagram">
            <img src={instagram} alt="instagram" className='p-1'/>
            Instagram
          </label>
          <small id="helpBlock2" className="help-block text-muted text-sm-start">
            The creator's Instagram handle (without the @)
          </small>
          <input
            type="text"
            className="form-control"
            id="instagram"
            aria-describedby="helpBlock2"
            name='instagram'
            onChange={props.handleChange}
            value = {props.creator.instagram ? props.creator.instagram : ''}
          />
          </div>
      </form>
    </div>
  )
}

export default form