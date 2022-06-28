define( function() {
"use strict";

document.head.appendChild( document.createElement( "STYLE" ) ).innerHTML =
	"TABLE.clsViewerProgress," +
	"TABLE.clsViewerProgress *" +
	"{" +
		"visibility: hidden !important;" +
	"}";

function Control()
{
};

Control.prototype.show = function( oControlHost )
{
	var fDefaultSeconds = 5.0;
	var fSeconds = ( oControlHost.configuration ? oControlHost.configuration.Seconds : fDefaultSeconds ) || fDefaultSeconds;
	this.m_iTimer = setTimeout( oControlHost.refresh.bind( oControlHost ), Math.round( fSeconds * 1000 ) );
};

Control.prototype.hide = function( oControlHost )
{
	this.cancelRefreshTimer();
};

Control.prototype.destroy = function( oControlHost )
{
	this.cancelRefreshTimer();
};

Control.prototype.getParameters = function( oControlHost )
{
	// WARNING: Do not remove this method.
	// Pages that don't contain prompt controls are cached by the viewer. The existence of a getParameters
	// is used as the indicator that the custom control is prompt-like and will prevent caching.
};

Control.prototype.cancelRefreshTimer = function()
{
	if ( this.m_iTimer )
	{
		clearTimeout( this.m_iTimer );
		this.m_iTimer = null;
	}
};

return Control;
});
