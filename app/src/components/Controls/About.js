import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRoomContext } from '../../RoomContext';
import * as roomActions from '../../actions/roomActions';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

const styles = (theme) =>
	({
		dialogPaper :
		{
			width                          : '30vw',
			[theme.breakpoints.down('lg')] :
			{
				width : '40vw'
			},
			[theme.breakpoints.down('md')] :
			{
				width : '50vw'
			},
			[theme.breakpoints.down('sm')] :
			{
				width : '70vw'
			},
			[theme.breakpoints.down('xs')] :
			{
				width : '90vw'
			}
		},
		logo :
		{
			marginRight : 'auto'
		},
		link :
		{
			display      : 'block',
			textAlign    : 'center',
			marginBottom : theme.spacing(1)
		},
		divider :
		{
			marginBottom : theme.spacing(3)
		}
	});
const eduMeetUrl='https://edumeet.org';
const About = ({
	aboutOpen,
	handleCloseAbout,
	classes
}) =>
{
	return (
		<Dialog
			open={aboutOpen}
			onClose={() => handleCloseAbout(false)}
			classes={{
				paper : classes.dialogPaper
			}}
		>
			<DialogTitle id='form-dialog-title'>
				<FormattedMessage
					id='room.about'
					defaultMessage='About'
				/>
			</DialogTitle>
			<DialogContent dividers>
				<DialogContentText paragraph>
					FastMeet在线视频会议平台是爱招飞产品的视频会议功能的技术支撑部分，
					实现了网页端的音频视频通话，屏幕分享，在线消息发送以及文件分享等功能。
				</DialogContentText>
				<DialogContentText paragraph>
					您可以在爱招飞的产品(FastERP、Smart、PinToo、FastWeb)中随时调用
					FastMeet，实现在平台内更快速更方便的沟通。本平台基于edumeet实现，
					w点击下方的链接了解详情
					
				</DialogContentText>
				<DialogContentText align='center' paragraph>
					<Link href={eduMeetUrl} target='_blank' rel='noreferrer' color='secondary' variant='h6'>
						{eduMeetUrl}
					</Link>
				</DialogContentText>
				<DialogContentText align='center' variant='body2'>
					<FormattedMessage
						id='label.version'
						defaultMessage='Version'
					/>
					:{` ${process.env.REACT_APP_VERSION}`}
				</DialogContentText>
				<Divider variant='middle' light className={classes.divider}/>
				{
					window.config.supportUrl
					&&
					<DialogContentText align='center' paragraph>
						<span>Visit for more info: </span>
						<Link href={window.config.supportUrl} target='_blank' rel='noreferrer' color='secondary'>
							{ window.config.supportUrl }
						</Link>
					</DialogContentText>
				}
				<Link href={window.config.privacyUrl ? window.config.privacyUrl : 'privacy/privacy.html'} target='_blank' rel='noreferrer' color='secondary' className={classes.link}>
					Data protection and Privacy Policy
				</Link>

			</DialogContent>
			<DialogActions>
				{ window.config.logo && <img alt='Logo' className={classes.logo} src={window.config.logo} /> }
				<Button onClick={() => { handleCloseAbout(false); }} color='primary'>
					<FormattedMessage
						id='label.close'
						defaultMessage='Close'
					/>
				</Button>
			</DialogActions>
		</Dialog>
	);
};

About.propTypes =
{
	roomClient       : PropTypes.object.isRequired,
	aboutOpen        : PropTypes.bool.isRequired,
	handleCloseAbout : PropTypes.func.isRequired,
	classes          : PropTypes.object.isRequired
};

const mapStateToProps = (state) =>
	({
		aboutOpen : state.room.aboutOpen
	});

const mapDispatchToProps = {
	handleCloseAbout : roomActions.setAboutOpen
};

export default withRoomContext(connect(
	mapStateToProps,
	mapDispatchToProps,
	null,
	{
		areStatesEqual : (next, prev) =>
		{
			return (
				prev.room.aboutOpen === next.room.aboutOpen
			);
		}
	}
)(withStyles(styles)(About)));
