<div class="gallery teaser">
	<?php if(isset($photographer) || isset($client)) : ?>
		<div class="header">
			<?php if(isset($photographer)) : ?>
				<?php print $photographer; ?>
			<?php endif; ?>

			<?php if(isset($photographer) && isset($client)) : ?>
				<div class="dash">&mdash;</div>
			<?php endif; ?>

			<?php if(isset($client)) : ?>
				<?php print $client; ?>
			<?php endif; ?>
		</div>
	<?php endif; ?>
	<div class="images"><?php print $images; ?></div>
	<span class="line"></span>
</div>