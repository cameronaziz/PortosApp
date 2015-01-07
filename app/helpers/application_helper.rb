module ApplicationHelper

  def full_title(page_title = '')
    base_title = "Porto's App"
    if page_title.empty?
      base_title
    else
      "#{page_title} | #{base_title}"
    end
  end

  def nav_li_link(anchor, url)
    if current_page?(url)
      html = "<li class='active'>"
      html += link_to raw("#{anchor}<span class='sr-only'>(current)</span>"), url
    else
      html = '<li>'
      html += link_to anchor, url
    end
    html += '</li>'
    html.html_safe
  end

end
